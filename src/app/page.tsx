type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.org/posts', {
    cache: 'no-store',
  });

  const posts: Post[] = await res.json();

  return ( 
   <main>
    <h1>سلام دوست من!</h1>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
    <ul>
      {posts.map((post) => (
         <li key={post.id}>{post.title}</li>
      ))}
    </ul>
   </main>
  )

  }