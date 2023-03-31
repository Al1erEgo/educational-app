import React from 'react'
import none from './none.png'
import up from './up.png'
import down from './down.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //if (sort === "") return down
    if (sort === down) return up
    if (sort === up) return ""
    return down
    //return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value


    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*{icon}*/}
            <img
                alt=''
                id={id + '-icon-' + sort}
                src={icon}
                width='6px'
                style={{margin: 'auto 4px'}}
            />

            {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
