interface ErrorProp{
    errors: string[]
}

function ErrorMessage({ errors }: ErrorProp){
    var errs = 
        errors.map((error: string) =>
            <p className="text-red-">{error}</p>
    );

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
            <div className="px-4 py-8 bg-red-300 border shadow border-red-400 sm:rounded-lg sm:px-10">
                <p className="text-red-">An error occured:</p>
                {errs}
            </div>
        </div>
    )
}

export default ErrorMessage