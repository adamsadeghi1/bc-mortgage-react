
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

export interface ScheduledPayment {
    payPerPeriod: string;
    paymentNumber: number;
    remainingBalence: string;
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
    mortgagePayment: string;
    schedulPayments: ScheduledPayment[]
}

const apiClient =  new APIClient<MortgageData,CalculateMortgage>("/mortgage");

const useMortgage = (inputValues?: CalculateMortgage) =>  useQuery<MortgageData,Error>({
                            queryKey: ["mortgage",inputValues],
                            queryFn: ()=> apiClient.post(inputValues),
                            staleTime: ms('10m')
                            
                        });

export default useMortgage;