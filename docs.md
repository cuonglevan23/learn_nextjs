# Nguyên tắc tuân theo
- File-system based routing 
  - do nextjs framework cung cấp bạn không cần phải tích hợp thư viện "react-router-dom" như cách truyền thống, nextjs đã ích hợp sẵn cho bạn
- không cần phải tự định nghĩa route + componet nữa: ví dụ <Routue path="/about" component={About} />
# thay vào đấy là chỉ cần định nghĩa toute dựa vào cấu trúc thư mục của next js 
 - tất cả route trong nextjs đều dựa vào thư mục "app" hoặc "pages"(dối với nextjs phiên bản cũ)
 tên thư mục sẽ tương ứng với tên route
 - ví dụ bạn có cấu trúc thư mục như sau:
 ```
  - app
    - about
      - page.js
    - contact
      - page.js
    - page.js
 ```
 - thì tương ứng với các route sẽ là:
  - /about => app/about/page.js
  - /contact => app/contact/page.js
  - / => app/page.js
 - mỗi file "page.js" sẽ tương ứng với một component react
 - ví dụ file app/about/page.js:
    ```jsx
    export default function AboutPage() {
      return <h1>About Us</h1>;
    }
    ```
 - tương tự file app/contact/page.js:
    ```jsx
    export default function ContactPage() {
      return <h1>Contact Us</h1>;
    }
    ```
 - và file app/page.js:
    ```jsx
    export default function HomePage() {
      return <h1>Welcome to the Home Page</h1>;
    }
    ```
 - với cách này bạn không cần phải định nghĩa route thủ công nữa, nextjs sẽ tự động ánh xạ các route dựa vào cấu trúc thư mục của bạn.
# Dynamic Routes (Route động)
 - bạn có thể tạo các route động bằng cách sử dụng dấu ngoặc vuông [] trong tên thư mục hoặc tệp.
 - ví dụ bạn muốn tạo một route động cho các bài viết, bạn có thể tạo cấu trúc thư mục như sau:
 ```
  - app
    - posts
      - [id]
        - page.js
 ```
# tổng kết: ý tưởng ở đây là mỗi folder là 1 thành phần trên đường link URL file page.tsx chính là giao diện component được render ứng với route đấy(do dùng ts nên khai báo là page.tsx nếu dùng javascript thì là page.js)

- vì sao dùng <Link> lại không reload lại trang, bản chất ở đây đều render ra thẻ <a> thôi, nhưng nextjs đã tối ưu sẵn cho bạn việc chuyển trang mà không cần reload lại trang (client-side navigation) giúp trải nghiệm người dùng mượt mà hơn. nhưng mà tại sao lại <Link> mà không phải là thẻ <a> bình thường, vì thẻ <a> bình thường sẽ làm reload lại trang khi chuyển trang, còn <Link> của nextjs thì không.
- useRouter: là một hook của nextjs cung cấp các phương thức và thuộc tính để điều hướng và quản lý trạng thái của router trong ứng dụng nextjs. bạn có thể dùng nó để chuyển trang, lấy thông tin về route hiện tại, v.v., đôi ra ta muốn xử dụng các sử kiện như onclick để chuyển trang thì ta dùng useRouter đối với nextjs khai báo "use client" ở đầu file để sử dụng các hook như useRouter. sẽ render 1 phần tử button, khi click vào button sẽ chuyển hướng đến trang /about mà không cần reload lại trang.
```jsx
"use client"; // Đảm bảo rằng đây là một component phía client      
import { useRouter } from "next/navigation";
export default function NavigateButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about"); // Chuyển hướng đến trang /about
  };

  return <button onClick={handleClick}>Go to About Page</button>;
}
``````jsx
"use client";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const handle_btn_click = () => {
    router.push("/");
    }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin dashboard.</p>
      <button onClick={() => handle_btn_click()}
      >Back </button>
    </div>
  );
};
export default Admin;
```
# Layouts
 - nextjs cung cấp một cách để tái sử dụng bố cục (layout) giữa các trang thông qua việc sử dụng tệp layout.js trong thư mục app.
 - ví dụ bạn muốn tất cả các trang trong ứng dụng của bạn có cùng một header và footer, bạn có thể tạo một tệp layout.js trong thư mục app như sau:
 ```
  - app
    - layout.js
    - about
      - page.js
    - contact
      - page.js
    - page.js
 ```
 - nội dung của tệp layout.js:
    ```jsx
    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            <header>
              <h1>My Website</h1>
            </header>
            <main>{children}</main>
            <footer>
              <p>&copy; 2023 My Website</p>
            </footer>
          </body>
        </html>
      );
    }
    ```
 - trong đó, { children } đại diện cho nội dung của các trang con (ví dụ: about, contact, home).
 - với cách này, tất cả các trang con sẽ tự động kế thừa bố cục từ layout.js mà không cần phải lặp lại mã cho header và footer trên mỗi trang.
 # Nested Layouts
 - bạn cũng có thể tạo các layout lồng nhau bằng cách thêm tệp layout.js trong các thư mục con.
 - ví dụ bạn muốn tất cả các trang trong thư mục about có một layout riêng biệt, bạn có thể tạo cấu trúc thư mục như sau:
 ```
  - app
    - layout.js
    - about
      - layout.js
      - team
        - page.js
      - company
        - page.js
    - contact
      - page.js
    - page.js
 ```
 - nội dung của tệp app/about/layout.js:
    ```jsx
    export default function AboutLayout({ children }) {
      return (
        <div>
          <nav>         // thanh điều hướng riêng cho trang about
            <a href="/about/team">Team</a>
            <a href="/about/company">Company</a>        
            </nav>
            <main>{children}</main>
        </div>
        );
    }
    ```
 - với cách này, các trang con trong thư mục about sẽ sử dụng layout riêng biệt từ
    app/about/layout.js, trong khi vẫn kế thừa layout chính từ app/layout.js.
# Sử dụng CSS trong Next.js
- 2 trường phái code css:
  - 1 code css thuần(tương tự nhứ html), gồm có
    - css
    - scss
    - tailwindcss
  - 2 css-in-js (styled-components, emotion,...)
- nextjs hỗ trợ tất cả các trường phái trên
# bước đầu làm quen với call api từ backend bằng fetch trong nextjs
- trong nextjs bạn có thể sử dụng fetch để gọi api từ backend tương tự như trong react bình thường
- ví dụ bạn có một api backend trả về danh sách bài viết tại endpoint http://localhost:8000/blogs
- bạn có thể gọi api này trong component của bạn như sau:
```jsx
"use client";
import { useEffect, useState } from "react";    
export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}
```
- trong ví dụ trên, chúng ta sử dụng hook useEffect để gọi api khi component được gắn vào DOM. Dữ liệu trả về từ api được lưu trữ trong state blogs và được hiển thị trong giao diện người dùng dưới dạng danh sách các bài viết.
- chú ý: tại sao phải khai báo "use client" ở đầu file, vì ta sử dụng hook useEffect và useState là các hook chỉ hoạt động trên phía client, nên ta phải khai báo "use client" để nextjs biết rằng component này sẽ chạy trên phía client.
- lưu ý thêm: nếu bạn gọi fetch trực tiếp trong component mà không sử dụng "use client", thì fetch sẽ được thực hiện trên phía server trong quá trình server-side rendering (SSR) của nextjs. Điều này có thể dẫn đến các vấn đề như không thể truy cập các API chỉ dành cho client hoặc gặp lỗi CORS. Do đó, để đảm bảo fetch được thực hiện trên phía client, bạn cần khai báo "use client" ở đầu file component.
 - tác dụng của useEffect là để thực hiện các hiệu ứng phụ trong component, chẳng hạn như gọi API, đăng ký sự kiện, hoặc cập nhật DOM. useEffect cho phép bạn kiểm soát khi nào và như thế nào các hiệu ứng này được thực hiện, giúp bạn quản lý vòng đời của component một cách hiệu quả hơn.
 - khác với useState là để quản lý trạng thái nội bộ của component, useEffect không trực tiếp liên quan đến việc lưu trữ dữ liệu hay trạng thái. Thay vào đó, nó tập trung vào việc thực hiện các hành động phụ dựa trên sự thay đổi của trạng thái hoặc props.
 - ví dụ trong trường hợp gọi API, useEffect cho phép bạn thực hiện việc gọi API khi component được gắn vào DOM hoặc khi một giá trị cụ thể thay đổi, trong khi useState sẽ lưu trữ dữ liệu trả về từ API để sử dụng trong giao diện người dùng.
 - tóm lại, useState và useEffect là hai hook có mục đích khác nhau nhưng thường được sử dụng cùng nhau để xây dựng các component React phức tạp và tương tác.
 # bắt đầu với swr trong nextjs(có rất nhiều thư viên caching dữ liệu như react-query,apollo client,... nhưng swr là thư viện chính thức được phát triển bởi team nextjs)
    - swr là một thư viện React hook được phát triển bởi Vercel, công ty đứng sau Next.js. Tên "SWR" là viết tắt của "stale-while-revalidate", một chiến lược caching phổ biến trong phát triển web.
    - swr cung cấp một cách đơn giản và hiệu quả để lấy dữ liệu từ API và quản lý trạng thái tải dữ liệu trong các ứng dụng React và Next.js.
    - các tính năng chính của swr bao gồm:
      - Tự động lấy lại dữ liệu: swr sẽ tự động lấy lại dữ liệu khi component được gắn vào DOM hoặc khi trang được tái kích hoạt.
      - Caching dữ liệu: swr lưu trữ dữ liệu đã lấy được trong bộ nhớ đệm để giảm thiểu số lần gọi API và cải thiện hiệu suất.
        - Hỗ trợ tái xác thực dữ liệu: swr cung cấp các cơ chế để tái xác thực dữ liệu khi cần thiết, giúp đảm bảo rằng dữ liệu luôn được cập nhật.
        - Quản lý trạng thái tải dữ liệu: swr cung cấp các trạng thái như loading, error, và data để giúp bạn dễ dàng quản lý giao diện người dùng dựa trên trạng thái tải dữ liệu.
```jsx
"use client";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
} 
```
- trong ví dụ trên, chúng ta sử dụng hook useSWR để lấy dữ liệu từ
http://localhost:8000/blogs. Hàm fetcher được sử dụng để định nghĩa cách lấy dữ liệu từ API. Chúng ta cũng kiểm tra các trạng thái isLoading và error để hiển thị giao diện người dùng phù hợp trong quá trình tải dữ liệu hoặc khi có lỗi xảy ra. Khi dữ liệu được tải thành công, chúng ta hiển thị danh sách các bài viết trong giao diện người dùng.
```jsx
"use client";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Home() {
    const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs</div>;
    return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map((blog) => (
            <li key={blog.id}>{blog.title}</li> 
        ))}
      </ul>
    </div>
  );
}
```