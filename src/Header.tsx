function Header({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <header>
                <h1>MOVIEFILIX</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Header;