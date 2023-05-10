import type { User, Puzzle } from "@prisma/client";

import { prisma } from "~/db.server";

export function getPuzzle({
  id,
  userId,
}: Pick<Puzzle, "id"> & {
  userId: User["id"];
}) {
  return prisma.puzzle.findFirst({
    select: { id: true, title: true },
    where: { id, userId },
  });
}

export function getNoteListItems({ userId }: { userId: User["id"] }) {
  return prisma.puzzle.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createPuzzle({
  title,
  userId,
}: Pick<Puzzle, "title"> & {
  userId: User["id"];
}) {
  return prisma.puzzle.create({
    data: {
      title,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deletePuzzle({
  id,
  userId,
}: Pick<Puzzle, "id"> & { userId: User["id"] }) {
  return prisma.puzzle.deleteMany({
    where: { id, userId },
  });
}
