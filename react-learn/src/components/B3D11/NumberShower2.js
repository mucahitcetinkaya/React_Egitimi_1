function NumberShower2(props) {
  return (
    <>
      <div>{props.number.replaceAll("", " ")}</div>
    </>
  )
}

export default NumberShower2;