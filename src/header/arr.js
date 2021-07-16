import StarIcon from "@material-ui/icons/Star";
function Arr(props) {
  const { arr } = props;
  console.log(arr);
  return (
    <div className="box2">
      {arr.map((item) => (
        <div>
          <img
            src={item.image}
            className="imgItem"
            width="310px"
            height="206px"
          />
          <div className="Fresh">
            <div>Fresh Mint</div>
            <div>{item.price}</div>
          </div>
          <p>toothpaste</p>
          <div>{item.title}</div>
          {item.id}
          <div className='StarIcon'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Arr;
