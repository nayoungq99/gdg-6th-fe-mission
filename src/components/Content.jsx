function Content() {
    return (
        <div style={styles.container}>
            <div>
                <input type="text" placeholder="상품 검색..." />
                <button>검색</button>
            </div>

            <div style={styles.result}>
                <img src="/gdg-logo.svg" alt="logo" style={styles.logoSmall} />
                <p>검색 결과가 없습니다.</p>
            </div>
        </div>
    );
}

const styles = {
  container: {
    textAlign: "center",
  },
};

export default Content;