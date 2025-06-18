export type Status = "PENDING" | "IN_PROGRESS" | "RESOLVED" | "REJECTED";

export type Report = {
  id: number;
  userId: number;
  categoryId: number;
  picture: string;
  status: Status;
  description?: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
