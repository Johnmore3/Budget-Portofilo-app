import EarningsForm from "./EarningsForm";

const mapStateToProps = state => {
    return {
        earnings: state.earnings,
        expenses : state.expenses,
    };
};

class Main extends Component {


    render() {
        
        return (
            <div>
                <ExpenseForm> 
                </ExpenseForm>>


                <EarningsForm>

                </EarningsForm>
                
            </div>
        );
    }
}

export default (connect(mapStateToProps)(Main));