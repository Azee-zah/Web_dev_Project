function Header() {
    const title = "Helper Expense Tracker";
    const present = new Date().toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="head">
            <h2 className="title">📑{title}</h2>
            <p className="date">{present}</p>
        </header>
    );
}

export default Header