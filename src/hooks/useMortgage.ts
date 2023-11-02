
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";

export interface ScheduledPayment {
    payPerPeriod: string;
    paymentNumber: number;
    remainingBalance: string;
    paidSoFarFromPrinciple: string;
  }

export interface CalculateMortgage{
    propertyPrice:number;
    downpayment: number;
    annualInterestRate: number;
    period: number;
    paymentSchedule: string;
}
interface MortgageData{
    type: string;
    mortgage: string;
    payment: string;
    paymentNumber: number;
    schedulPayments: ScheduledPayment[]
}

const apiClient =  new APIClient<MortgageData,CalculateMortgage>("/mortgage");

const useMortgage = (inputValues?: CalculateMortgage) =>  useQuery<MortgageData,Error>({
                            queryKey: ["mortgage",inputValues],
                            queryFn: ()=> apiClient.post(inputValues),
                            staleTime: ms('10m'),
                           
                        });

export default useMortgage;