 
/* ============================================
   CodeBlock.jsx - Bloque de código copiable
   Estilo oscuro tipo editor para resaltar
   ============================================ */
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, language = 'jsx', title }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-3 overflow-hidden shadow-sm border">
      {/* Header oscuro tipo terminal */}
      <div className="code-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {/* Puntos tipo macOS */}
          <div className="d-flex gap-1">
            <span className="rounded-circle d-inline-block" style={{ width: 12, height: 12, background: '#ff5f57' }} />
            <span className="rounded-circle d-inline-block" style={{ width: 12, height: 12, background: '#febc2e' }} />
            <span className="rounded-circle d-inline-block" style={{ width: 12, height: 12, background: '#28c840' }} />
          </div>
          {title && <small className="text-secondary code-font">{title}</small>}
        </div>
        <div className="d-flex align-items-center gap-2">
          <small className="text-secondary code-font">{language}</small>
          <button onClick={handleCopy}
            className="btn btn-sm border-0 p-1 text-secondary"
            title="Copiar código">
            {copied
              ? <Check size={14} className="text-success" />
              : <Copy size={14} />
            }
          </button>
        </div>
      </div>
      {/* Código */}
      <div className="code-body">
        <pre className="mb-0 code-font">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  )
}