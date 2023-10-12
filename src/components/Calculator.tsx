import { Button, Input, InputGroup, Select, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdArrowDropDown } from "react-icons/md";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  propertyPrice: z.number().min(0).nonnegative(),
  downpayment: z.number().min(0).nonnegative(),
  annualInterestRate: z.number().min(0.1).nonnegative(),
  period: z.number().min(5).max(30).nonnegative(),
  paymentSchedule: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const Calculator = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Stack spacing={3}>
          <Input
            {...register("propertyPrice")}
            id="propertyPrice"
            variant="outline"
            placeholder="Property Price"
          />
          <Input
            {...register("downpayment")}
            id="downpayment"
            variant="outline"
            placeholder="Downpayment"
          />
          <Input
            {...register("annualInterestRate")}
            id="annualInterestRate"
            variant="outline"
            placeholder="Annual Intrest Rate"
          />
          <Input
            {...register("period")}
            id="period"
            variant="outline"
            placeholder="Loan Term (in Year)"
          />
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
        </Stack>
        <Button colorScheme="gray" variant="solid" marginY={3} type="submit">
          Calculate
        </Button>
      </form>
    </>
  );
};

export default Calculator;
