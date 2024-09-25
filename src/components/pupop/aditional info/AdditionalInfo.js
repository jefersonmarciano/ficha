import React from 'react';
import './AdditionalInfo.css';

function AdditionalInfo({ additionalInfo, setCharacter }) {
  const handleChange = (field, subfield, value) => {
    setCharacter(prev => ({
      ...prev,
      additionalInfo: {
        ...prev.additionalInfo,
        [field]: {
          ...prev.additionalInfo[field],
          [subfield]: value
        }
      }
    }));
  };

  return (
    <div className="additional-info">
      <h3>Informações Adicionais</h3>
      <table>
        <tbody>
          <tr>
            <td>CA</td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.ca.base || ''} 
                onChange={(e) => handleChange('ca', 'base', e.target.value)}
                placeholder="Base"
              />
            </td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.ca.total || ''} 
                onChange={(e) => handleChange('ca', 'total', e.target.value)}
                placeholder="Total"
              />
            </td>
          </tr>
          <tr>
            <td>RD</td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.rd.base || ''} 
                onChange={(e) => handleChange('rd', 'base', e.target.value)}
                placeholder="Base"
              />
            </td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.rd.total || ''} 
                onChange={(e) => handleChange('rd', 'total', e.target.value)}
                placeholder="Total"
              />
            </td>
          </tr>
          <tr>
            <td>Movimento</td>
            <td colSpan="2">
              <input 
                type="number" 
                value={additionalInfo.movimento || ''} 
                onChange={(e) => handleChange('movimento', 'value', e.target.value)}
                placeholder="Movimento"
              />
            </td>
          </tr>
          <tr>
            <td>Taxa Crítica</td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.taxaCritica.base || ''} 
                onChange={(e) => handleChange('taxaCritica', 'base', e.target.value)}
                placeholder="Base"
              />
            </td>
            <td>
              <input 
                type="number" 
                value={additionalInfo.taxaCritica.total || ''} 
                onChange={(e) => handleChange('taxaCritica', 'total', e.target.value)}
                placeholder="Total"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdditionalInfo;