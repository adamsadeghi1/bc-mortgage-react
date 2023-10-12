import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdArrowDropDown } from "react-icons/md";
import { z } from "zod";
import { CalculateMortgage } from "../hooks/useMortgage";

const schema = z.object({
  propertyPrice: z
    .number({ invalid_type_error: "Property Price is required." })
    .min(0)
    .max(Number.MAX_SAFE_INTEGER)
    .nonnegative(),
  downpayment: z
    .number({ invalid_type_error: "Downpayment is required." })
    .min(0)
    .max(Number.MAX_SAFE_INTEGER)
    .nonnegative(),
  annualInterestRate: z
    .number({ invalid_type_error: "Interest Rate is required." })
    .min(0.1)
    .max(Number.MAX_SAFE_INTEGER)
    .nonnegative(),
  period: z
    .number({ invalid_type_error: "Loan Term is required." })
    .min(5)
    .max(30)
    .nonnegative(),
  paymentSchedule: z
    .string()
    .min(1, { message: "Payment Schedule is required" }),
});

type FormData = z.infer<typeof schema>;

interface Prop {
  calculate: (data: CalculateMortgage) => void;
}

//
const Calculator = ({ calculate }: Prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Box border="1px" borderRadius="12px" borderColor="gray.200" padding={3}>
      <form id="insert-data" onSubmit={handleSubmit((data) => calculate(data))}>
        <Stack spacing={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              {...register("propertyPrice", { valueAsNumber: true })}
              id="propertyPrice"
              variant="outline"
              type="number"
              errorBorderColor="crimson"
              placeholder="Property Price"
            />
          </InputGroup>
          {errors.propertyPrice && (
            <Text color="crimson">{errors.propertyPrice.message}</Text>
          )}

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              {...register("downpayment", { valueAsNumber: true })}
              id="downpayment"
              variant="outline"
              type="number"
              errorBorderColor="crimson"
              placeholder="Downpayment"
            />
          </InputGroup>
          {errors.downpayment && (
            <Text color="crimson">{errors.downpayment.message}</Text>
          )}

          <Input
            {...register("annualInterestRate", { valueAsNumber: true })}
            id="annualInterestRate"
            variant="outline"
            type="decimal"
            errorBorderColor="crimson"
            placeholder="Annual Intrest Rate"
          />
          {errors.annualInterestRate && (
            <Text color="crimson">{errors.annualInterestRate.message}</Text>
          )}

          <Input
            {...register("period", { valueAsNumber: true })}
            id="period"
            variant="outline"
            type="number"
            errorBorderColor="crimson"
            placeholder="Loan Term (in Year)"
          />
          {errors.period && (
            <Text color="crimson">{errors.period.message}</Text>
          )}

          <Select
            {...register("paymentSchedule")}
            id="paymentSchedule"
            icon={<MdArrowDropDown />}
            placeholder="Select Payment Schedule"
            size="md"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="BiWeekly">Bi-Weekly</option>
          </Select>
          {errors.paymentSchedule && (
            <Text color="crimson">{errors.paymentSchedule.message}</Text>
          )}
        </Stack>
        <Button
          id="submit-btn"
          colorScheme="messenger"
          variant="solid"
          marginY={3}
          type="submit"
        >
          Calculate
        </Button>
      </form>
    </Box>
  );
};

export default Calculator;
