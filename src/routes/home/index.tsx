import renderTable from '@/components/Table';
import ProductPreview from './ProductPreview';
import ProductDetail from './ProductDetail';
import { createColumnHelper, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import './home.scss';
import './home-table.scss';
import products from './products.json'

export interface TableRow {
  product: {
    name: string;
    image: string;
    maker?: string;
  };
  releaseDate: string;
  '321Score6M': number; // 6개월_321갯수 / 6개월_판매량 * 1000
  '321Count6M': number;
  '321Count3D': number;
};

const lorem = `
그들의 창공에 하는 꾸며 수 있음으로써 용감하고 끓는 보라. 자신과 우는 가장 평화스러운 굳세게 품었기 그리하였는가? 것은 황금시대를 이상의 방황하여도, 이성은 품었기 인생을 청춘 그림자는 피다. 어디 뛰노는 되려니와, 풍부하게 착목한는 희망의 아름다우냐? 찬미를 황금시대의 인간의 있는 든 약동하다. 천지는 소리다.이것은 이것이야말로 것이다. 곳이 물방아 되려니와, 풀밭에 관현악이며, 것이다. 천하를 같이 청춘의 넣는 만물은 그것을 반짝이는 듣는다. 찬미를 굳세게 청춘의 너의 철환하였는가?

것은 열락의 이상의 것이다. 위하여, 물방아 기관과 미인을 어디 청춘 천하를 이상이 그리하였는가? 청춘의 청춘 희망의 이것이야말로 뛰노는 이상이 것이다. 트고, 이것을 위하여, 우리의 품고 투명하되 밥을 있는 이성은 것이다. 우리 보배를 그들에게 길을 것이다. 보내는 능히 이 새 소담스러운 뿐이다. 거친 청춘 광야에서 평화스러운 착목한는 유소년에게서 역사를 없으면, 우리의 끓는다. 수 가장 길지 이상의 것이다. 꽃이 피어나는 눈에 목숨을 있는가? 가진 이는 못하다 이상 앞이 든 거선의 인간은 노년에게서 있다.

그들의 동산에는 웅대한 할지라도 열매를 따뜻한 전인 뿐이다. 군영과 위하여, 오직 것이다. 역사를 앞이 풀이 장식하는 힘차게 위하여 인생에 이것을 아름다우냐? 그들은 갑 되려니와, 너의 그들에게 하여도 청춘을 같이, 피가 교향악이다. 심장의 두손을 과실이 굳세게 아름답고 거친 것이다. 붙잡아 부패를 청춘의 트고, 있으며, 뛰노는 많이 두손을 수 쓸쓸하랴? 못할 관현악이며, 주며, 밝은 아니다. 얼마나 되려니와, 같지 것이 싶이 것이다.보라, 것이다. 얼마나 그들에게 눈이 봄바람을 부패뿐이다. 청춘에서만 되려니와, 인생에 얼음이 영원히 남는 용기가 이 않는 약동하다.

커다란 꽃이 끓는 피어나기 내는 봄바람이다. 넣는 작고 위하여서 쓸쓸한 길을 것은 것이다. 가슴에 이상 실현에 하여도 같지 가장 든 교향악이다. 소금이라 그들의 청춘의 불어 황금시대를 위하여 피는 같은 말이다. 아름답고 꾸며 새가 인생을 가는 기관과 말이다. 생의 모래뿐일 군영과 그러므로 오직 불어 주는 그들은 살 약동하다. 영원히 미인을 대한 스며들어 천자만홍이 봄바람이다. 이상의 피에 지혜는 피어나는 주며, 것이다. 피부가 희망의 넣는 가장 군영과 것이 이것이다.

자신과 두손을 위하여서, 커다란 동산에는 발휘하기 유소년에게서 것이다. 주는 품고 온갖 할지라도 약동하다. 오아이스도 그와 피고, 이 넣는 눈에 이것이다. 이상이 없으면, 그러므로 황금시대다. 때까지 그러므로 피가 것이다. 봄바람을 찾아 가는 이상을 그들의 사막이다. 긴지라 소담스러운 밥을 붙잡아 설산에서 사랑의 노래하며 칼이다. 그들은 미묘한 산야에 뭇 꽃이 약동하다. 피고, 청춘의 목숨이 뼈 착목한는 아니다. 풀밭에 이상은 너의 어디 피어나는 산야에 공자는 이것이다.
`;


const row = createColumnHelper<TableRow>();
const columns = [
  row.accessor('product', {
    header: '제품',
    cell: (props) => <ProductPreview {...props.getValue()} />,
    sortUndefined: 1,
    // sortingFn: (a, b) => {} // TODO: 이름순 정렬
  }),
  row.accessor('releaseDate', {
    header: '출시일',
  }),
  row.accessor('321Score6M', {
    header: '불쾌지수',
    cell: (props) => <div style={{ fontWeight: 700 }}>{props.getValue()}</div>,
  }),
  row.accessor('321Count6M', {
    header: '불만리뷰/최근6개월',
  }),
  row.accessor('321Count3D', {
    header: '불만리뷰/최근3일',
  }),
]



function App() {
  const table = useReactTable<TableRow>({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        { id: '321Score6M', desc: true },
        { id: 'product', desc: false },
      ],
    }
  })

  return (
    <main className="wrapper">
      <section className="left">
        <div className="search-bar">
          <input type="text" placeholder="제품명을 입력해주세요" />
        </div>
        <div className="card">
          {renderTable(table)}
        </div>
      </section>
      <section className="right">
        <ProductDetail />
      </section>
    </main>
  );
}

export default App;
