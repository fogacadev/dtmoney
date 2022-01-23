import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";


import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';
import { TransactionsProvider } from "../src/hooks/useTransactions";

Modal.setAppElement('#root');


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModelOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModelOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModelOpen(false);
    }

  return (
    <TransactionsProvider>
       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

       <Dashboard/>

       <NewTransactionModal 
       isOpen={isNewTransactionModalOpen} 
       onRequestClose={handleCloseNewTransactionModal} />

       <GlobalStyle/>
    </TransactionsProvider>
  );
}

