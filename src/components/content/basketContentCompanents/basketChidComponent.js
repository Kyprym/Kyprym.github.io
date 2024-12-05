import DeleteIcon from '@mui/icons-material/Delete';


export const BasketChildComponent = ({ text, count, addCountFunc, delCountFunc }) => {




    return <>
        {count === 0 ? <></> :
            <tr className='BasketChildComponent'>
                <td className='fuctional_component' onClick={addCountFunc}>
                    <span className='BasketChildComponentButton'>Добавить</span>
                </td>
                <td className='fuctional_component'><span>{count}</span></td>
                <td className='fuctional_component'><span>{text}</span></td>
                <td>
                    <span onClick={delCountFunc}>
                        <DeleteIcon
                            className='DeleteIcon fuctional_component'
                            style={{ fontSize: "2.5rem" }}
                        ></DeleteIcon>
                    </span>
                </td>
            </tr >
        }
    </>
}