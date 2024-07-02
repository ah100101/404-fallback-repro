export default function Dynamic404Page({ slug }: any) {
  return <h1>Dynamic - 404 - {slug}</h1>;
}

export const getServerSideProps = async ({ params }: any) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};
