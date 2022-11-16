import renderTable from '@/components/Table';
import ProductPreview from './ProductPreview';
import { createColumnHelper, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import './home.scss';
import data from './products.json'

export interface Document {
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


const document = createColumnHelper<Document>();
const columns = [
  document.accessor('product', {
    header: '제품',
    cell: (props) => <ProductPreview {...props.getValue()} />,
    sortUndefined: 1,
    // sortingFn: (a, b) => {} // TODO: 이름순 정렬
  }),
  document.accessor('releaseDate', {
    header: '출시일',
  }),
  document.accessor('321Score6M', {
    header: '씨발지수',
    cell: (props) => <div style={{ fontWeight: 700 }}>{props.getValue()}</div>,
  }),
  document.accessor('321Count6M', {
    header: '불만리뷰/최근6개월',
  }),
  document.accessor('321Count3D', {
    header: '불만리뷰/최근3일',
  }),
]


function BSBox() {
  return (
    <div className="card">
      오늘의 병신지수
    </div>
  )
}



function App() {
  const table = useReactTable<Document>({
    data,
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
    <div className="wrapper">
      <div className="content-1">
        <BSBox />
      </div>
      <div className="content-2">
        <div className="card">
          {renderTable(table)}
        </div>

      </div>
    </div>
  );
}

export default App;
