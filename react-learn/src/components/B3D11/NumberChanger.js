function NumberChanger(props) {


  function handleClick() {
    props.highComponentdenGelen("11111");
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Numarayı değiştir</button>
      </div>
    </>
  );
}

export default NumberChanger;


/*
normalde state acıp funchion da state i set ediyorduk
ama burda state acmadık diger tarafta state var
HighComponent deki setNumber i buraya prob olarak yollayalım
butona da funchion verdik onClick yani tıklayınca degisecek
0000 dı tıklayınca 1111 oldu
*/