import Header from "@/components/header"
import styles from '@/styles/About.module.css'
import Footer from '@/components/footer'
import Counter from '@/components/counter'


export default function About() {
    return(
        <>
            <Header/>
            <main>
                <h1>About Page</h1>
                <Counter/>
            </main>
            <Footer/>
        </>
    )
}