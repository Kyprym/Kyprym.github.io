import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
export const BasketChildComponent = ({ text, count, addCountFunc, delCountFunc, clearCountFunc }) => {
    const fontSize = 2.5
    const iconFontSize = fontSize + "rem"



    return <>
        {count === 0 ? <></> :
            <tr className='BasketChildComponent'>
                <td className='fuctional_component' onClick={addCountFunc}>
                    <span>
                        <AddBoxIcon style={{ fontSize: iconFontSize }}></AddBoxIcon>
                    </span>
                </td>
                <td className='fuctional_component' onClick={delCountFunc}>
                    <span >
                        <IndeterminateCheckBoxIcon style={{ fontSize: iconFontSize }}></IndeterminateCheckBoxIcon>
                    </span>
                </td>
                <td className='fuctional_component basketCount'><span>{count}</span></td>
                <td className='fuctional_component'><span>{text}</span></td>
                <td>
                    <span onClick={clearCountFunc}>
                        <DeleteIcon
                            className='DeleteIcon fuctional_component'
                            style={{ fontSize: iconFontSize }}
                        ></DeleteIcon>
                    </span>
                </td>
            </tr >
        }
    </>
}