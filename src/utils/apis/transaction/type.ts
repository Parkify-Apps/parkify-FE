import { z } from "zod";

export const transactionSchema = z.object({
  reservation_id: z.number({ required_error: "Reservation ID is required" }),
  price: z.number({ required_error: "Price is required" }),
  payment: z.string({ required_error: "Payment method is required" }),
});

export interface Transaction {
  reservation_id: number;
  price: number;
  payment: string;
}

export type TransactionSchema = z.infer<typeof transactionSchema>;
