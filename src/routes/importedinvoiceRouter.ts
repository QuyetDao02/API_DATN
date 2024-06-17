import { Router } from 'express';
import { container } from 'tsyringe';
import { ImportedInvoiceController } from '../controllers/importedinvoiceController';
const importedinvoiceRouter = Router();
const importedInvoiceController = container.resolve(ImportedInvoiceController);
importedinvoiceRouter.get('/get/:id', importedInvoiceController.getImportedInvoiceStatus.bind(importedInvoiceController));
importedinvoiceRouter.post('/update', importedInvoiceController.updateImportedInvoice.bind(importedInvoiceController));
importedinvoiceRouter.post('/updatepice', importedInvoiceController.updateImportedInvoicePice.bind(importedInvoiceController));
importedinvoiceRouter.post('/create', importedInvoiceController.createImportedInvoice.bind(importedInvoiceController));
importedinvoiceRouter.post('/delete/:id', importedInvoiceController.deleteImportedInvoice.bind(importedInvoiceController));
importedinvoiceRouter.get('/getdetail/:id', importedInvoiceController.getImportedInvoiceId.bind(importedInvoiceController));
importedinvoiceRouter.post('/detail/create', importedInvoiceController.createDetailImportedInvoice.bind(importedInvoiceController));
importedinvoiceRouter.post('/detail/delete/:id', importedInvoiceController.deleteDetailImportedInvoice.bind(importedInvoiceController));
importedinvoiceRouter.get('/getbyid/:id', importedInvoiceController.getImportedInvoiceByID.bind(importedInvoiceController));
export default importedinvoiceRouter;