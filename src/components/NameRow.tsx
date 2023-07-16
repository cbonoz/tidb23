import React from 'react'
import { NameResult } from '@/model'

interface Props {
    result: NameResult
}

export default function NameRow({
    result
}: Props) {
    return (
        // Create a row element with tail wind css
        <div className='border-1 border-white py-2 my-1'>
            <div className='flex justify-between w-full flex-col sm:mt-10 mt-6'>
                <span>{result.name} - {result.match_score}% match</span>
            </div>
            <br />
            <span className='justify-start align-start'>{result.reason}</span>
        </div>
    )
}
