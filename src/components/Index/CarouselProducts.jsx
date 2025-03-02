import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { categories } from "../../data/products"; 

const CarouselProducts = () => {
  
  const allProducts = categories.flatMap((category) => category.items);

  return (
    <div className="flex flex-col justify-center items-center h-[70vh] w-full">
      <div className="mb-12 font-bold text-2xl lg:text-4xl lg:mb-14">
        <p>Descubre nuestro portafolio</p>
      </div>
      <div className="w-full max-w-5xl">
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {allProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/4 flex justify-center"
              >
                <div className="p-1">
                  <Card className="rounded-none h-72">
                    <CardContent className="flex flex-col items-center justify-center p-5 bg-[#D9D9D9]">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-40 object-contain"
                      />
                    </CardContent>
                    <CardFooter className="flex flex-col items-center justify-center p-4">
                      <p className="text-center mt-2 font-medium">{product.name}</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselProducts;
