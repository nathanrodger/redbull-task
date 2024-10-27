import style from './table.module.scss';

const Table = ({ headings, data }) => {
    return (
        <div className={ style.scrollable }>
            <table className={ style.table }>
                <thead className={ style.thead }>
                    <tr className={ style.table__row }>
                        {
                            headings.map((heading, index) => {
                                return (
                                    <th className={ style.table__header } key={ index }>
                                        { heading }
                                    </th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody className={ style.tbody }>
                    {
                        Object.values(data).map((d, index) => {
                            return (
                                <tr className={ style.table__row } key={ index }>
                                    {
                                        Object.values(d).map((value, index) => {
                                            return (
                                                <td className={ style.table__data } key={ index }>
                                                    { value }
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;