import { connectDB } from "./db";
import Submission from "../models/Submission";
import Work from "../models/Work";
import type { SortOrder } from "mongoose";

function docToObj(doc: Record<string, unknown> | null): Record<string, unknown> | null {
  if (!doc) return null;
  const { _id, __v, ...rest } = doc;
  return { id: String(_id), ...rest };
}

function docsToObj(docs: Record<string, unknown>[]): Record<string, unknown>[] {
  return docs.map((d) => docToObj(d)!);
}

const prisma = {
  submission: {
    findMany: async (args?: { where?: Record<string, unknown>; orderBy?: Record<string, unknown>; skip?: number; take?: number }) => {
      await connectDB();
      let query = Submission.find(args?.where || {});
      if (args?.orderBy) query = query.sort(args.orderBy as string | { [key: string]: SortOrder });
      if (args?.skip) query = query.skip(args.skip);
      if (args?.take) query = query.limit(args.take);
      return docsToObj((await query.lean()) as unknown as Record<string, unknown>[]);
    },
    findUnique: async ({ where }: { where: { id?: string } }) => {
      await connectDB();
      return docToObj((await Submission.findById(where.id).lean()) as unknown as Record<string, unknown> | null);
    },
    create: async ({ data }: { data: Record<string, unknown> }) => {
      await connectDB();
      const doc = await Submission.create(data);
      return docToObj(doc.toObject() as unknown as Record<string, unknown>);
    },
    update: async ({ where, data }: { where: { id?: string }; data: Record<string, unknown> }) => {
      await connectDB();
      return docToObj((await Submission.findByIdAndUpdate(where.id, { $set: data }, { new: true }).lean()) as unknown as Record<string, unknown> | null);
    },
    count: async (args?: { where?: Record<string, unknown> }) => {
      await connectDB();
      return Submission.countDocuments(args?.where || {});
    },
    delete: async ({ where }: { where: { id?: string } }) => {
      await connectDB();
      return docToObj((await Submission.findByIdAndDelete(where.id).lean()) as unknown as Record<string, unknown> | null);
    },
  },
  work: {
    findMany: async (args?: { where?: Record<string, unknown>; orderBy?: Record<string, unknown>; skip?: number; take?: number }) => {
      await connectDB();
      let query = Work.find(args?.where || {});
      if (args?.orderBy) query = query.sort(args.orderBy as string | { [key: string]: SortOrder });
      if (args?.skip) query = query.skip(args.skip);
      if (args?.take) query = query.limit(args.take);
      return docsToObj((await query.lean()) as unknown as Record<string, unknown>[]);
    },
    findUnique: async ({ where }: { where: { id?: string } }) => {
      await connectDB();
      return docToObj((await Work.findById(where.id).lean()) as unknown as Record<string, unknown> | null);
    },
    create: async ({ data }: { data: Record<string, unknown> }) => {
      await connectDB();
      const doc = await Work.create(data);
      return docToObj(doc.toObject() as unknown as Record<string, unknown>);
    },
    update: async ({ where, data }: { where: { id?: string }; data: Record<string, unknown> }) => {
      await connectDB();
      return docToObj((await Work.findByIdAndUpdate(where.id, { $set: data }, { new: true }).lean()) as unknown as Record<string, unknown> | null);
    },
    aggregate: async (args: { _max?: Record<string, unknown>; _min?: Record<string, unknown>; _avg?: Record<string, unknown>; _sum?: Record<string, unknown> }) => {
      await connectDB();
      const groupStage: Record<string, unknown> = { _id: null };
      for (const [op, fields] of Object.entries(args)) {
        if (fields && typeof fields === "object") {
          for (const field of Object.keys(fields as Record<string, unknown>)) {
            const mongoOp =
              op === "_max" ? "$max" : op === "_min" ? "$min" : op === "_avg" ? "$avg" : op === "_sum" ? "$sum" : null;
            if (mongoOp) {
              groupStage[field] = { [mongoOp]: `$${field}` };
            }
          }
        }
      }
      const result = (await Work.aggregate([{ $group: groupStage as { _id: unknown; [key: string]: unknown } }])) as unknown as Record<string, unknown>[];
      const output: Record<string, unknown> = {};
      for (const [op, fields] of Object.entries(args)) {
        if (fields && typeof fields === "object") {
          output[op] = {};
          for (const field of Object.keys(fields as Record<string, unknown>)) {
            (output[op] as Record<string, unknown>)[field] = result[0]?.[field] ?? null;
          }
        }
      }
      return output;
    },
    delete: async ({ where }: { where: { id?: string } }) => {
      await connectDB();
      return docToObj((await Work.findByIdAndDelete(where.id).lean()) as unknown as Record<string, unknown> | null);
    },
    count: async (args?: { where?: Record<string, unknown> }) => {
      await connectDB();
      return Work.countDocuments(args?.where || {});
    },
  },
};

export { prisma };
