"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Form,
} from "@heroui/react";

const FilterForm = () => {
  const router = useRouter();
  const [carType, setCarType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carName = formData.get("carName");
    router.push(`/explore?carName=${carName}&carType=${carType}`);
  };
  const onClear = () => {
    setCarType("");
    router.push("/explore");
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField name="carName">
          <Label className="flex items-center gap-2 text-gray-400">
            Car Name
          </Label>
          <Input
            placeholder="e.g. Onyx GT Coupe"
            className="border border-gray-600 focus:border-orange-500"
          />
          <FieldError />
        </TextField>

        <Select placeholder="Select one" value={carType} onChange={setCarType}>
          <Label className="flex items-center gap-2 text-gray-400 font-medium">
            Car Type
          </Label>
          <Select.Trigger className="border border-gray-600 focus:border-orange-500">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="suv" textValue="SUV">
                SUV
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="sedan" textValue="Sedan">
                Sedan
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="coupe" textValue="Coupe">
                Coupe
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="hatchback" textValue="Hatchback">
                Hatchback
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="convertible" textValue="Convertible">
                Convertible
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="crossover" textValue="Crossover">
                Crossover
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      <div className="flex gap-6 mt-6 w-full">
        <Button
          type="submit"
          className="bg-orange-500 text-black rounded-xl flex-[3] btn"
        >
          Search
        </Button>
        <Button
          type="button"
          onPress={onClear}
          className="bg-black border border-gray-600 text-white rounded-xl flex-[1] btn hover:bg-orange-500 hover:text-black"
        >
          Clear
        </Button>
      </div>
    </Form>
  );
};

export default FilterForm;
