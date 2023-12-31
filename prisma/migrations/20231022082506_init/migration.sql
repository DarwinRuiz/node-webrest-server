BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[todo] (
    [id] INT NOT NULL IDENTITY(1,1),
    [text] VARCHAR(255) NOT NULL,
    [completeAt] DATETIME CONSTRAINT [todo_completeAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [todo_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
