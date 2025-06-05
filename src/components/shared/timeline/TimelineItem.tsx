import { ReactNode, ReactElement, Children, isValidElement } from 'react';

interface ITimelineItemProps {
    children: ReactNode;
    index?: number;
}

let globalIndex = 0;

export function TimelineItem({ children, index = globalIndex++ }: ITimelineItemProps) {
    const isEven = index % 2 === 0;

    const dateComponent = findChildByType(children, TimelineItemDate);
    const headerComponent = findChildByType(children, TimelineItemHeader);
    const bodyComponent = findChildByType(children, TimelineItemBody);

    return (
        <div className="relative">
            <div className="absolute left-0 z-10 w-4 h-4 transform -translate-x-1/2 bg-indigo-500 rounded-full md:left-1/2 -translate-y-1/3"></div>

            <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="flex items-start justify-start pb-8 md:w-1/2 md:pb-0 md:justify-end">
                    <div className={`px-4 ${isEven ? 'md:pl-16 md:mr-auto' : 'md:pl-0 md:pr-16'}`}>{dateComponent}</div>
                </div>

                <div className="pl-8 md:w-1/2 md:pl-16">
                    <div
                        className={`bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 shadow-md transform transition-transform duration-300 hover:-translate-y-1 ${isEven ? 'md:mr-16' : ''}`}
                    >
                        {headerComponent}
                        {bodyComponent}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ITimelineItemDateProps {
    children: ReactNode;
}

export function TimelineItemDate({ children }: ITimelineItemDateProps) {
    return <>{children}</>;
}

interface ITimelineItemHeaderProps {
    children: ReactNode;
}

export function TimelineItemHeader({ children }: ITimelineItemHeaderProps) {
    return <>{children}</>;
}

interface ITimelineItemBodyProps {
    children: ReactNode;
}

export function TimelineItemBody({ children }: ITimelineItemBodyProps) {
    return <>{children}</>;
}

function findChildByType(
    children: ReactNode,
    targetType: React.ComponentType<{ children: ReactNode }>,
): ReactElement | null {
    const childrenArray = Children.toArray(children);

    for (const child of childrenArray) {
        if (isValidElement(child) && child.type === targetType) {
            return child;
        }
    }

    return null;
}
