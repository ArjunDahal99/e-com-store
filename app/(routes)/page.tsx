import getBillboard from "@/actions/get-billboard";
import getProduts from "@/actions/get-products";
import Billboard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProduts({ isFeatured: true });

  const billboard = await getBillboard("e1d55076-d24b-4b75-b481-34de7833bead");

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
