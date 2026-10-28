---
id: ch01-c-derivable-ssi-df-c-lineaire
type: proposition
chapter: 1
title: $\C$-dérivabilité $\Leftrightarrow$ différentiabilité avec $df_z$ $\C$-linéaire
ref: Proposition I.2.3
page: 7
importance: 2
depends: [ch01-decomposition-r-lineaire, ch01-def-differentiable-r2, ch01-def-c-derivable]
tags: [c-derivable, differentielle, c-lineaire, caracterisation]
---
## Intuition

> 💡 Deux façons de dire « $f$ est bien approchée par une application linéaire près de $z$ » :
> au sens réel, $f(z+\omega)\approx f(z)+df_z(\omega)$ avec $df_z$ une matrice $2\times2$ quelconque ([[ch01-def-differentiable-r2]]) ;
> au sens complexe, $f(z+\omega)\approx f(z)+f'(z)\,\omega$ avec $f'(z)$ un **nombre** ([[ch01-def-c-derivable]]).
> La proposition dit que la $\C$-dérivabilité, c'est exactement la différentiabilité réelle **plus** la contrainte que l'approximation linéaire soit une multiplication par un nombre complexe, i.e. soit $\C$-linéaire.

Une application $L:\C\to\C$ est **$\C$-linéaire** si $L(\lambda\omega)=\lambda L(\omega)$ pour tous $\lambda,\omega\in\C$ (et additive) ; c'est le cas si et seulement si $L$ est la multiplication par $L(1)$ ([[ch01-decomposition-r-lineaire]]).

## Énoncé

**Proposition (poly, Proposition I.2.3, p. 7).** Soit $f:\Omega\to\C$ une fonction définie sur un ouvert $\Omega$ de $\C$ et $z\in\Omega$. Les conditions suivantes sont équivalentes :

1. (i) $f$ est différentiable au point $z$ et $df_z$ est $\C$-linéaire ;
2. (ii) $f$ est $\C$-dérivable en $z$.

Lorsqu'elles sont réalisées, $df_z$ est la multiplication par $f'(z)$ : $df_z(\omega)=f'(z)\,\omega$ pour tout $\omega\in\C$.

## Hypothèses

### H1 — dans (i), la différentiabilité en $z$

**Rôle.** Elle fournit le développement limité (I.2.3), $f(z+\omega)-f(z)-df_z(\omega)=o(|\omega|)$, à partir duquel on obtient la limite du taux d'accroissement.

**Si on la retire.** Il ne reste qu'une condition sur la « jacobienne formelle » formée des dérivées partielles, et elle ne suffit pas. Exemple : $f(z)=\dfrac{\bar z^{\,2}}{z}$ pour $z\ne0$, $f(0)=0$. Elle est continue en $0$ ($|f(z)|=|z|$). Sur l'axe réel $f(x)=\frac{x^2}{x}=x$, sur l'axe imaginaire $f(iy)=\frac{-y^2}{iy}=iy$ ; donc $\frac{\partial f}{\partial x}(0)=1$, $\frac{\partial f}{\partial y}(0)=i$ et l'application $\omega\mapsto s\frac{\partial f}{\partial x}(0)+t\frac{\partial f}{\partial y}(0)=s+it=\omega$ est $\C$-linéaire. Pourtant le taux d'accroissement en $0$ vaut $\dfrac{f(\omega)}{\omega}=\dfrac{\bar\omega^{\,2}}{\omega^2}=e^{-4i\theta}$ pour $\omega=re^{i\theta}$ : il dépend de la direction, pas de limite. (Bien sûr $f$ n'est pas différentiable en $0$ : sinon on aurait $df_0=\id$ et $f$ serait $\C$-dérivable.)

### H2 — dans (i), la $\C$-linéarité de $df_z$

**Rôle.** Elle permet d'écrire $df_z(\omega)=\lambda_z\,\omega$ pour un nombre $\lambda_z$, puis de diviser par $\omega$.

**Si on la retire.** $f(z)=\bar z$ est différentiable en tout point avec $df_z(\omega)=\bar\omega$ (elle est $\R$-linéaire), mais n'est $\C$-dérivable nulle part : le taux $\bar\omega/\omega$ vaut $1$ sur l'axe réel et $-1$ sur l'axe imaginaire.

### H3 — $\Omega$ ouvert

**Rôle.** Garantit que $z+\omega\in\Omega$ pour tout $\omega$ assez petit, condition nécessaire pour que les deux notions (différentiabilité et $\C$-dérivabilité) aient un sens.

## Idée de la preuve

Les deux conditions disent la même chose : $|f(z+\omega)-f(z)-\lambda\omega|=o(|\omega|)$ pour un certain $\lambda\in\C$. Diviser par $|\omega|$ transforme ce développement limité en la limite du taux d'accroissement, et réciproquement.

## Preuve

*(i) $\Rightarrow$ (ii).* Supposons $f$ différentiable en $z$ avec $df_z$ $\C$-linéaire. D'après le lemme I.2.1 ([[ch01-decomposition-r-lineaire]]), il existe $\lambda_z\in\C$ tel que $df_z(\omega)=\lambda_z\,\omega$ pour tout $\omega\in\C$. Le développement limité (I.2.3) ([[ch01-def-differentiable-r2]]) s'écrit donc
$$
|f(z+\omega)-f(z)-\lambda_z\,\omega|=o(|\omega|).
$$
En divisant par $|\omega|$ (pour $\omega\ne0$) :
$$
\left|\frac{f(z+\omega)-f(z)}{\omega}-\lambda_z\right|=\frac{|f(z+\omega)-f(z)-\lambda_z\omega|}{|\omega|}\xrightarrow[\omega\to0]{}0 ,
$$
c'est-à-dire $\lim_{\omega\to0}\frac{f(z+\omega)-f(z)}{\omega}=\lambda_z$ : $f$ est $\C$-dérivable en $z$ ([[ch01-def-c-derivable]]), avec $f'(z)=\lambda_z$.

*(ii) $\Rightarrow$ (i).* Supposons $f$ $\C$-dérivable en $z$ et notons $\lambda_z=\lim_{\omega\to0}\frac{f(z+\omega)-f(z)}{\omega}=f'(z)$. Posons, pour $\omega\ne0$ petit, $\eps(\omega)=\frac{f(z+\omega)-f(z)}{\omega}-\lambda_z$, de sorte que $\eps(\omega)\to0$. Alors
$$
|f(z+\omega)-f(z)-\lambda_z\,\omega|=|\omega|\,|\eps(\omega)|=o(|\omega|).
$$
L'application $\omega\mapsto\lambda_z\omega$ est $\R$-linéaire (elle est même $\C$-linéaire) ; elle vérifie donc la définition (I.2.3) de la différentielle. Ainsi $f$ est différentiable en $z$ et, par unicité de la différentielle, $df_z$ est la multiplication par $\lambda_z=f'(z)$, qui est $\C$-linéaire.

Dans les deux cas on a obtenu $df_z(\omega)=f'(z)\,\omega$. $\square$

## Preuve à trous

*(i) $\Rightarrow$ (ii).* Par le lemme I.2.1, $df_z$ étant $\C$-linéaire, <trou indice="une application C-linéaire de C dans C est...">il existe $\lambda_z\in\C$ avec $df_z(\omega)=\lambda_z\omega$</trou>. Donc $|f(z+\omega)-f(z)-\lambda_z\omega|=o(|\omega|)$, et <trou indice="que fait-on de ce o ?">en divisant par $|\omega|$ : $\left|\frac{f(z+\omega)-f(z)}{\omega}-\lambda_z\right|\to0$</trou>, d'où $f'(z)=\lambda_z$.

*(ii) $\Rightarrow$ (i).* Avec $\lambda_z=f'(z)$, on a <trou>$|f(z+\omega)-f(z)-\lambda_z\omega|=|\omega|\,\bigl|\frac{f(z+\omega)-f(z)}{\omega}-\lambda_z\bigr|=o(|\omega|)$</trou> ; comme $\omega\mapsto\lambda_z\omega$ est $\R$-linéaire, <trou indice="définition + unicité">$f$ est différentiable en $z$ et $df_z$ est la multiplication par $\lambda_z$, donc $\C$-linéaire</trou>. $\square$

## Exemples

* **$f(z)=z^2$.** $(z+\omega)^2-z^2-2z\omega=\omega^2=o(|\omega|)$ : $f$ est différentiable avec $df_z(\omega)=2z\omega$, $\C$-linéaire ; donc $f$ est $\C$-dérivable, $f'(z)=2z$.
* **$f(z)=|z|^2$.** $|z+\omega|^2-|z|^2=\bar z\omega+z\bar\omega+|\omega|^2$, donc $df_z(\omega)=\bar z\omega+z\bar\omega$. D'après le lemme I.2.1 (coefficient de $\bar\omega$ égal à $z$), $df_z$ est $\C$-linéaire si et seulement si $z=0$ : $f$ est $\C$-dérivable en $0$ (avec $f'(0)=0$) et en aucun autre point.
* **$f(z)=\Re(z)$.** $f$ est $\R$-linéaire, donc $df_z(\omega)=\Re(\omega)=\frac12\omega+\frac12\bar\omega$ : coefficient de $\bar\omega$ égal à $\frac12\ne0$, donc $f$ n'est $\C$-dérivable en aucun point.

## Pièges

* > ⚠️ « Différentiable » (au sens réel) n'implique **pas** « $\C$-dérivable » : il faut en plus la $\C$-linéarité de $df_z$ ($\bar z$, $\Re z$, $|z|^2$ hors de $0$).
* Le sens (ii) $\Rightarrow$ (i) est utile aussi : une fonction $\C$-dérivable en $z$ est automatiquement différentiable (donc continue) en $z$, avec $df_z=$ multiplication par $f'(z)$ ; c'est ce qui permet d'appliquer tout le calcul différentiel réel aux fonctions holomorphes.
* La $\C$-linéarité porte sur la **différentielle** $df_z$, pas sur $f$ : $z\mapsto z^2$ n'est pas linéaire, mais sa différentielle en chaque point l'est.
* En pratique, on ne vérifie pas la $\C$-linéarité à la main : on utilise le critère $\frac{\partial f}{\partial\bar z}(z)=0$ ([[ch01-cauchy-riemann]]).
