function Content() {
    return (
        <div style={styles.container}>
            <div>
                <input type="text" placeholder="상품 검색..." />
                <button>검색</button>
            </div>

            <div>
                <img src="/gdg-logo.svg" alt="logo" style={styles.logo} />
                <p>검색 결과가 없습니다.</p>
            </div>
        </div>
    );
}

const styles = {
  container: {
    textAlign: "center",
  },
  logo: {
    width: "70px",
    marginBottom: "5px",
  },
};

export default Content;