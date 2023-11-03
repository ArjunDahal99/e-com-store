import getBillboard from "@/actions/get-billboard";
import getProduts from "@/actions/get-products";
import Billboard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProduts({ isFeatured: true });

  const billboard = await getBillboard("7c534ac3-cf8f-4530-aa24-5c27d2695914");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
