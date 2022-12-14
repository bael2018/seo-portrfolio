import { ChangeEvent, useState } from 'react'

export const useInput = (str: string) => {
    const [value, setValue] = useState<string>(str)

    return {
        value,
        bind: () => {
            return {
                value,
                onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)
            }
        },
        clearValue: () => setValue('')
    }
}