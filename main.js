function App() {
    const date = new Date('1-1-2026').getFullYear() - 2000
    const st1 = { color: 'blue', backgroundColor: 'wheat', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }
    return (
        <div>
            <div>
                <p>LAB01</p>
            </div>
            <div style={st1}>
                <h1 style={st1}>Chonlathan Methaphusitnanan</h1>
                <p style={st1}>age : {date}</p>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)