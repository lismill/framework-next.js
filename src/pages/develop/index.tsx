import Framework from "../../components/framework";
import LContent from "../../components/l-content";

const Develop = ({posts}: any) => {
  return (
    <Framework title="Develop | Create Next App" description="Develop | Generated by create next app">
      <LContent top="breadcrumb" breadcrumb="Develop">
        <div>{JSON.stringify(posts.data)}</div>
        <div className="h-[600px]">Develop</div>
      </LContent>
    </Framework>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://yapi.syy.dongchali.cn/mock/730/home/list");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Develop;
