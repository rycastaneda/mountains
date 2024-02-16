import Nav from "./nav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const History = () => {
  return (
    <div id="history">
      <Nav sticky logo='./logo-text.png' />
      <div className="relative min-h-[710px] bg-[url('/page2.jpg')]">

        <div className="container mx-auto">
          <img src="./history.png" className='pt-10' />
          <p className='ml-16 mt-2 lg:mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
        </div>

        <div className='absolute bottom-0 right-0 left-0 bg-gray'>
          <div className="container mx-auto py-8">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel1.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel1.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4"><img src="./carousel2.jpg" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden lg:inline-flex" />
              <CarouselNext  className="hidden lg:inline-flex"/>
            </Carousel>
          </div>
        </div>
      </div>
    </div>

  );
}

export default History;