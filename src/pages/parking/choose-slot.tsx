import ButtonSubmit from "@/components/button-submit";
import DetailCard from "@/components/detail-card";
import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";

const ChooseSlot = () => {
  return (
    <Layout>
      <div className="relative h-full w-full">
        <div className="flex flex-col p-4 space-y-4">
          <DetailCard
            key={1}
            location_name={"Tunjungan Plaza"}
            cover_image={"/public/tunjungan-plaza.jpg"}
            city={"Surabaya"}
          />
          <p className="font-semibold text-md">Select Vehicle</p>
          <div className="flex">
            <RadioGroup className="flex w-full gap-5" defaultValue="">
              <Card className="flex flex-row items-center gap-1 w-1/2 p-5 rounded-3xl border-2 active:border-orange-400 focus-within:border-orange-400">
                <RadioGroupItem value="car" id="r1" />
                <img
                  className="h-12 w-full object-contain"
                  src="/public/car.png"
                  alt=""
                  id="r1"
                />
              </Card>
              <Card className="flex flex-row items-center gap-1 w-1/2 p-5 rounded-3xl border-2 active:border-orange-400 focus-within:border-orange-400">
                <RadioGroupItem
                  value="motorcycle"
                  id="r2"
                  className="bg-white"
                />
                <img
                  className="h-12 w-full object-contain"
                  src="/public/motorcycle.png"
                  alt=""
                  id="r2"
                />
              </Card>
            </RadioGroup>
          </div>
          <p className="font-semibold text-md">Choose Floor</p>
          <Select>
            <SelectTrigger className="p-4 h-12 rounded-2xl">
              <SelectValue placeholder="Choose Floor" />
            </SelectTrigger>
            <SelectContent className="flex">
              <SelectItem className="flex" value="1">
                1
                <span className="">
                  <Badge className="ms-4">Available</Badge>
                </span>
              </SelectItem>
              <SelectItem className="flex" value="2">
                2
                <span className="">
                  <Badge className="ms-4">Not Available</Badge>
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-5 absolute bottom-0 w-full p-4">
          <Card className="flex flex-col w-1/2 rounded-2xl border-orange-400">
            <CardContent className="py-2">
              <p className="font-light text-md leading-none">Picking</p>
              <p className="font-semibold text-lg">1st Floor</p>
            </CardContent>
          </Card>
          <div className="flex flex-col w-1/2 leading-none">
            <ButtonSubmit
              button_value="Book Now"
              button_icon={<ArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChooseSlot;