import { Card, CardContent } from "./ui/card";

interface Props {
  location_name: string;
  city: string;
  floor: string;
  cover_image: string;
}

const DetailCard2 = (props: Props) => {
  const { location_name, city, floor, cover_image } = props;

  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2>{location_name}</h2>
              <p>{city}</p>
            </div>
            <div className="flex flex-col">
              <p>{floor}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={cover_image} alt={location_name} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCard2;
