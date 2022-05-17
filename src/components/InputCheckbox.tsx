import { FormikProps } from 'formik'
interface Props {
  formik: FormikProps<any>;
}
export const InputCheckbox = ({ formik }: Props) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="form-check self-start">
        <input
          className="form-check-input accent-[#569B51] text-green-500 h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#569B51] checked:border-[#569B51] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id="agree"
          {...formik.getFieldProps('agree')}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor="agree"
        >
          Acepto los términos y condiciones
        </label>
      </div>
      {formik.touched.agree && formik.errors.agree
        ? (
        <div className="mt-1 text-center">
          <div className="text-danger-custom text-sm font-medium">
            {formik.errors.agree as any}
          </div>
        </div>
          )
        : null}
    </div>
  )
}
