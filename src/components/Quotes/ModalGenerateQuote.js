import React from 'react';
import { MultiStep } from './MultiStep/MultiStep';

export const ModalGenerateQuote = () => {
  return (
    <div className="modal fade" id="newGenerateQuote" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <MultiStep />
          </div>
        </div>
      </div>
    </div>
  );
};
