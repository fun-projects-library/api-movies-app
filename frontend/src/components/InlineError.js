// Snippet => rfc
import React from 'react'
import { Label } from 'semantic-ui-react'

export default function InlineError({message}) {
  return (
    <div>
      <Label basic color='red' pointing>
        {message}
      </Label>
    </div>
  )
}
