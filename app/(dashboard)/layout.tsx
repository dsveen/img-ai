import { Navbar } from "@/components/navbar";
import { Footer }  from "@/components/footer";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return ( 
    <div className="h-full relative">
      <Navbar isPro={isPro} apiLimitCount={apiLimitCount} />
      <main className="md:pl-72 pb-10">
        {children}
      </main>
      <Footer />
    </div>
   );
}
 
export default DashboardLayout;
