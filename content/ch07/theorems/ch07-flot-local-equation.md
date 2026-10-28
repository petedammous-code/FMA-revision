---
id: ch07-flot-local-equation
type: proposition
chapter: 7
title: Équations vérifiées par un flot local
ref: Proposition VII.2.11
page: 133
importance: 2
depends: [ch07-flot-local-def, ch07-champ-vecteurs-courbe-integrale-def]
tags: [flot, flot-local, equation-du-flot, condition-initiale]
---
## Intuition

> 💡 Le flot local $F(\lambda,t_0,t,x)$ est la position à l'instant $t$ de la particule lâchée en $x$ à l'instant $t_0$ dans le champ $X_\lambda$ ([[ch07-flot-local-def]]). Deux faits en découlent immédiatement : à chaque instant, la **vitesse** de cette particule est le vecteur du champ là où elle se trouve ; et à l'instant de départ, elle est **au point de départ**.

C'est une simple réécriture de la définition, mais sous une forme très utile : on oublie la courbe $\alpha_{\lambda,t_0,x}$ et on ne manipule plus qu'**une** fonction de plusieurs variables, $F$, dont on connaît la dérivée partielle en $t$ et la valeur sur la « diagonale » $t=t_0$. C'est la forme qu'on dérive dans les exercices (dérivée du déterminant $\det d(F_t)_x$, équation de transport...).

## Énoncé

**Proposition (poly, Proposition VII.2.11, p. 133).** Soit $F : W\times\mathcal E\times U'\to U$ un flot local de $X$ en $(\lambda_0,\tau_0,x_0)$ comme dans la définition VII.2.9 ([[ch07-flot-local-def]]). Alors $F$ vérifie, pour tout $(\lambda,t_0,t,x)$ dans le domaine de définition $W\times\mathcal E\times U'$ de $F$,
$$
\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=X\big(t,F(\lambda,t_0,t,x)\big),\qquad F(\lambda,t_0,t_0,x)=x,
$$
où, dans la première formule, $X$ désigne $X_\lambda$ : $\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=X_\lambda\big(t,F(\lambda,t_0,t,x)\big)=X\big(\lambda,t,F(\lambda,t_0,t,x)\big)$.

En particulier la dérivée partielle $\frac{\partial F}{\partial t}$ existe en tout point du domaine, et elle est continue dès que $F$ l'est.

## Hypothèses

### H1 — $F$ est un flot local

**Rôle.** C'est la seule hypothèse : par définition, pour $(\lambda,t_0,x)$ fixé, $t\mapsto F(\lambda,t_0,t,x)$ est une courbe intégrale de $X_\lambda$ de condition initiale $(t_0,x)$, ce qui est **exactement** le contenu des deux formules.

**Si on la retire.** Une application $G(\lambda,t_0,t,x)$ quelconque n'a aucune raison de vérifier ces équations. Plus instructif : la **réciproque** est vraie. Si $G : W\times\mathcal E\times U'\to U$ vérifie les deux équations, alors pour $(\lambda,t_0,x)$ fixé, $t\mapsto G(\lambda,t_0,t,x)$ est dérivable de dérivée $X_\lambda(t,G)$ continue, c'est donc une courbe intégrale de $X_\lambda$ sur $]t_0-\epsilon,t_0+\epsilon[$ de condition initiale $(t_0,x)$ ; si de plus $(W,J,\epsilon,U',F)$ est un flot local, l'unicité dans [[ch07-flot-local-def]] donne $G=F$. Les deux équations **caractérisent** donc le flot local.

### H2 — Le point est dans le domaine de $F$

**Rôle.** Les formules n'ont de sens que pour $\lambda\in W$, $x\in U'$, $t_0\in J$ et $\abs{t-t_0}<\epsilon$. La seconde formule utilise $(t_0,t_0)\in\mathcal E$, ce qui est vrai pour tout $t_0\in J$.

**Si on l'oublie.** Pour $X(x)=x^2$ (exemple 2 ci-dessous), la formule $F(t_0,t,x)=x/(1-x(t-t_0))$ « continue » au-delà de $t_0+1/x$ (pour $x>0$) et vérifie encore $\partial_tF=F^2$ là où elle est définie, mais pour $t>t_0+1/x$ elle ne décrit plus la particule partie de $x$ : celle-ci a explosé en $t_0+1/x$. Appliquer les équations hors du domaine conduit à des absurdités.

## Idée de la preuve

On fixe $(\lambda,t_0,x)$ ; la courbe $t\mapsto F(\lambda,t_0,t,x)$ est une courbe intégrale de $X_\lambda$ de condition initiale $(t_0,x)$ : on écrit ce que cela veut dire.

## Preuve

*Le poly énonce cette proposition sans démonstration ; elle découle directement des définitions.*

Soit $(\lambda,t_0,t,x)\in W\times\mathcal E\times U'$, c'est-à-dire $\lambda\in W$, $t_0\in J$, $x\in U'$ et $t\in\,]t_0-\epsilon,t_0+\epsilon[$. Par définition d'un flot local ([[ch07-flot-local-def]]), l'application
$$
\alpha=\alpha_{\lambda,t_0,x} : \,]t_0-\epsilon,t_0+\epsilon[\,\to U,\qquad s\mapsto F(\lambda,t_0,s,x)
$$
est une courbe intégrale de $X_\lambda$ de condition initiale $(t_0,x)$. Par définition d'une courbe intégrale ([[ch07-champ-vecteurs-courbe-integrale-def]]), $\alpha$ est dérivable (de classe $C^1$) et

* $\alpha'(s)=X_\lambda(s,\alpha(s))$ pour tout $s\in\,]t_0-\epsilon,t_0+\epsilon[$ ;
* $\alpha(t_0)=x$.

Or la dérivée de $s\mapsto F(\lambda,t_0,s,x)$ au point $s=t$ est, par définition, la dérivée partielle $\frac{\partial F}{\partial t}(\lambda,t_0,t,x)$ (les autres variables étant gelées). La première égalité donne donc, en $s=t$,
$$
\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=\alpha'(t)=X_\lambda\big(t,\alpha(t)\big)=X_\lambda\big(t,F(\lambda,t_0,t,x)\big).
$$
La seconde donne $F(\lambda,t_0,t_0,x)=\alpha(t_0)=x$ (le point $(\lambda,t_0,t_0,x)$ est bien dans le domaine puisque $\abs{t_0-t_0}=0<\epsilon$). $\square$

Si de plus $F$ est continue (c'est le cas pour le flot fourni par [[ch07-existence-flot-local]]), $\frac{\partial F}{\partial t}=X\circ(\lambda,t,F)$ est continue comme composée d'applications continues.

## Preuve à trous

Fixons $\lambda\in W$, $t_0\in J$, $x\in U'$. Par définition d'un flot local, <trou indice="que sait-on de la courbe $s\mapsto F(\lambda,t_0,s,x)$ ?">$\alpha : s\mapsto F(\lambda,t_0,s,x)$ est une courbe intégrale de $X_\lambda$ sur $]t_0-\epsilon,t_0+\epsilon[$, de condition initiale $(t_0,x)$</trou>. Donc $\alpha'(s)=X_\lambda(s,\alpha(s))$ et $\alpha(t_0)=x$. Comme <trou indice="dérivée d'une fonction partielle">la dérivée de $s\mapsto F(\lambda,t_0,s,x)$ en $t$ est par définition $\frac{\partial F}{\partial t}(\lambda,t_0,t,x)$</trou>, on obtient $\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=X_\lambda(t,F(\lambda,t_0,t,x))$, et <trou>$F(\lambda,t_0,t_0,x)=\alpha(t_0)=x$</trou>. $\square$

## Exemples

**Exemple 1 (champ linéaire).** $X_\lambda(t,x)=\lambda x$ sur $\R$, $F(\lambda,t_0,t,x)=x\,e^{\lambda(t-t_0)}$. On vérifie : $\frac{\partial F}{\partial t}=\lambda x\,e^{\lambda(t-t_0)}=\lambda F=X_\lambda(t,F)$, et $F(\lambda,t_0,t_0,x)=x\,e^0=x$.

**Exemple 2 (champ quadratique).** $X(t,x)=x^2$ sur $\R$, $F(t_0,t,x)=\dfrac{x}{1-x(t-t_0)}$ sur le domaine du flot local de [[ch07-flot-local-def]] (exemple 2). On a $\frac{\partial F}{\partial t}=\dfrac{x^2}{(1-x(t-t_0))^2}=F^2$ et $F(t_0,t_0,x)=x$.

**Exemple 3 (ce que la proposition ne dit pas : la dérivée en $t_0$).** Toujours pour $X(x)=x^2$, notons $u=1-x(t-t_0)$. On calcule
$$
\frac{\partial F}{\partial t_0}=\frac{-x\cdot x}{u^2}=-\frac{x^2}{u^2},\qquad \frac{\partial F}{\partial x}=\frac{u-x\cdot(-(t-t_0))}{u^2}=\frac{1}{u^2},
$$
donc $\frac{\partial F}{\partial t_0}(t_0,t,x)=-\frac{\partial F}{\partial x}(t_0,t,x)\cdot X(t_0,x)$. Cette identité est vraie en général pour un flot $C^1$ (on l'obtient en dérivant la formule de composition [[ch07-composition-flot]] $F(t_0,t,x)=F(t_0+h,t,F(t_0,t_0+h,x))$ en $h=0$), mais elle **n'est pas** dans la proposition VII.2.11 : celle-ci ne parle que de la dérivée en $t$.

## Pièges

* > ⚠️ La dérivée porte sur l'instant **courant** $t$ (troisième variable), pas sur l'instant initial $t_0$ : $\frac{\partial F}{\partial t_0}$ n'est **pas** $X(t_0,\dots)$ (voir l'exemple 3).
* Dans $X(t,F(\dots))$, le temps qui apparaît est $t$, pas $t_0$ : pour un champ dépendant du temps, $\frac{\partial F}{\partial t}(\lambda,t_0,t,x)\neq X_\lambda(t_0,F(\lambda,t_0,t,x))$ en général.
* La relation $F(\lambda,t_0,t_0,x)=x$ ne dit rien de $F(\lambda,t_0,t,x)$ pour $t\ne t_0$ : ce n'est pas « $F(\lambda,t_0,t,\cdot)=\id$ ».
* Les formules ne valent que sur le domaine $W\times\mathcal E\times U'$ du flot local ; pour le flot global, on a les analogues (VII.3.3)–(VII.3.4) sur le domaine $D$ ([[ch07-proprietes-flot-formules]]).
