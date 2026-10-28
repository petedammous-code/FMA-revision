---
id: ch06-neumann-inverse-id-moins-l
type: lemma
chapter: 6
title: Inversibilité de $\mathrm{Id}-L$ pour $\|L\|<1$ (série de Neumann) et régularité $C^\infty$ de $L\mapsto(\mathrm{Id}-L)^{-1}$
ref: Exercice VI.1.5
page: 118
importance: 2
depends: [ch05-inversion-c-infini, ch05-serie-neumann, ch05-lef-banach-norme-algebre, ch05-banach-series-absolument-convergentes, ch05-lineaire-c-infini]
tags: [neumann, inverse, operateur, banach, serie-geometrique, c-infini]
---
## Intuition

> 💡 Pour un réel $\ell$ avec $|\ell|<1$, on a $\dfrac1{1-\ell}=1+\ell+\ell^2+\cdots$ et $\Big|\dfrac{1}{1-\ell}\Big|\le\dfrac1{1-|\ell|}$. Le lemme dit exactement la même chose pour un **opérateur** $L$ (application linéaire continue) de petite norme : $\id-L$ est inversible, d'inverse $\sum_n L^n$, et cet inverse dépend de $L$ de façon $C^\infty$, comme $\ell\mapsto 1/(1-\ell)$.

Vocabulaire : $\mathcal L(E)$ est l'espace des applications linéaires continues de $E$ dans $E$, muni de la norme d'opérateur $\|L\|=\sup_{\|x\|\le1}\|L(x)\|$ ([[ch05-norme-operateur-def]]), qui vérifie $\|L\circ M\|\le\|L\|\,\|M\|$ ; $L^n=L\circ\cdots\circ L$, $L^0=\id_E$. « $\id_E-L$ inversible » signifie : bijective, d'inverse linéaire **continu** (« borné »). $B_{\mathcal L(E)}(0,a)$ est la boule **ouverte** de centre $0$ et de rayon $a$ de $\mathcal L(E)$.

C'est l'outil qui, dans le point fixe à paramètre ([[ch06-point-fixe-parametre-cp]]), permet d'inverser $\id_F-\frac{\partial g}{\partial x}$ et de montrer que la différentielle du point fixe est régulière.

## Énoncé

**Lemme (poly, Exercice VI.1.5, p. 118).** Soit $E$ un espace de Banach et soit $a\in[0;1[$. Pour tout $L\in\mathcal L(E)$ tel que $\|L\|\le a$, $\id_E-L$ est inversible, et son inverse est borné, de norme plus petite que $(1-a)^{-1}$. L'application
$$
B_{\mathcal L(E)}(0,a)\to\mathcal L(E),\qquad L\mapsto(\id-L)^{-1}
$$
est de classe $C^\infty$.

**Précisions (établies dans la preuve).** L'inverse est la somme de la série normalement convergente $(\id_E-L)^{-1}=\sum_{n\ge0}L^n$. L'application $L\mapsto(\id-L)^{-1}$ est même $C^\infty$ sur la boule ouverte $B_{\mathcal L(E)}(0,1)$ (c'est sous cette forme que le poly l'utilise dans le Théorème VI.1.4), et sa différentielle en $L$ est
$$
H\mapsto(\id-L)^{-1}\circ H\circ(\id-L)^{-1}.
$$

## Hypothèses

### H1 — $E$ est un espace de Banach

**Rôle.** Si $E$ est complet, $\mathcal L(E)$ l'est aussi ([[ch05-lef-banach-norme-algebre]]), ce qui permet de sommer la série absolument convergente $\sum L^n$ ([[ch05-banach-series-absolument-convergentes]]).

**Si on la retire.** Soit $E=c_{00}$ l'espace des suites réelles à support fini, muni de $\|x\|_\infty=\sup_n|x_n|$ (non complet), et $S$ le décalage à droite, $(Sx)_1=0$, $(Sx)_{n+1}=x_n$ : $S$ est linéaire, $\|S\|=1$, et $L=\frac12S$ vérifie $\|L\|=\frac12$. L'équation $(\id-L)x=e_1$ (où $e_1=(1,0,0,\dots)$) s'écrit $x_1=1$ et $x_{n+1}=\frac12x_n$ pour $n\ge1$, d'unique solution $x_n=2^{1-n}$, qui n'est **pas** à support fini. Donc $e_1\notin(\id-L)(E)$ : $\id-L$ n'est pas surjective, donc pas inversible (elle est pourtant injective : $(\id-L)x=0$ force $x_1=0$ puis $x_n=0$ pour tout $n$).

### H2 — $\|L\|\le a<1$

**Rôle.** Elle donne $\|L^n\|\le a^n$, terme général d'une série géométrique convergente, et la borne $\sum a^n=(1-a)^{-1}$.

**Si on la retire.** La borne $1$ est optimale : $L=\id_E$ (norme $1$) donne $\id-L=0$, non inversible (si $E\ne\{0\}$). Et la condition n'est que suffisante : $L=2\,\id_E$ a $\|L\|=2$ mais $\id-L=-\id_E$ est inversible ; la série $\sum L^n=\sum2^n\id$ diverge pourtant.

## Idée de la preuve

Comme pour $1/(1-\ell)$ : la série $\sum L^n$ converge normalement dans le Banach $\mathcal L(E)$ et $(\id-L)\sum_{n\le N}L^n=\id-L^{N+1}\to\id$. Pour la régularité, $L\mapsto(\id-L)^{-1}$ est la composée de l'application affine $L\mapsto\id-L$ et de l'inversion $M\mapsto M^{-1}$, qui est $C^\infty$ sur $\mathrm{Iso}(E)$.

## Preuve

*Le poly laisse ce résultat en exercice ; voici une preuve complète, qui reprend la série de Neumann ([[ch05-serie-neumann]]).*

**Étape 1 : convergence.** Comme $E$ est un Banach, $\mathcal L(E)$ est un Banach et sa norme vérifie $\|M\circ N\|\le\|M\|\,\|N\|$ ([[ch05-lef-banach-norme-algebre]]). Par récurrence, $\|L^n\|\le\|L\|^n\le a^n$. La série $\sum_{n\ge0}\|L^n\|$ est donc majorée par $\sum a^n=\frac1{1-a}<+\infty$ : la série $\sum L^n$ est absolument convergente, donc convergente dans l'espace complet $\mathcal L(E)$ ([[ch05-banach-series-absolument-convergentes]]). Notons $S=\sum_{n\ge0}L^n\in\mathcal L(E)$ ; par l'inégalité triangulaire (passée à la limite), $\|S\|\le\sum_{n\ge0}a^n=(1-a)^{-1}$.

**Étape 2 : $S$ est l'inverse de $\id-L$.** Soit $S_N=\sum_{n=0}^NL^n$. Par télescopage,
$$
(\id-L)\circ S_N=S_N\circ(\id-L)=\id-L^{N+1}.
$$
Quand $N\to+\infty$, $S_N\to S$ et $\|L^{N+1}\|\le a^{N+1}\to0$ ; la composition étant continue ($\|(\id-L)\circ(S_N-S)\|\le\|\id-L\|\,\|S_N-S\|$), on obtient $(\id-L)\circ S=S\circ(\id-L)=\id$. Donc $\id-L$ est bijective, d'inverse $S$, linéaire continu, de norme $\le(1-a)^{-1}$. En particulier $\id-L\in\mathrm{Iso}(E)$, ensemble des isomorphismes bicontinus de $E$.

**Étape 3 : régularité $C^\infty$.** Soit $\alpha:\mathcal L(E)\to\mathcal L(E)$, $\alpha(L)=\id-L$. C'est la somme d'une constante et de l'application linéaire continue $L\mapsto-L$ : $\alpha$ est $C^\infty$, de différentielle $d\alpha_L(H)=-H$ ([[ch05-lineaire-c-infini]]). D'après l'étape 2 (appliquée avec n'importe quel $a'<1$), $\alpha$ envoie la boule ouverte $B_{\mathcal L(E)}(0,1)$ — et a fortiori $B_{\mathcal L(E)}(0,a)$ — dans l'ouvert $\mathrm{Iso}(E)$. Par le Théorème V.5.7 ([[ch05-inversion-c-infini]]), $\Psi:\mathrm{Iso}(E)\to\mathcal L(E)$, $M\mapsto M^{-1}$ est $C^\infty$, avec $d\Psi_M(G)=-M^{-1}GM^{-1}$. La composée de deux applications $C^\infty$ est $C^\infty$ (lemme de composition, voir l'étape 5 de la preuve de [[ch05-inversion-c-infini]]), donc
$$
L\mapsto(\id-L)^{-1}=\Psi(\alpha(L))
$$
est $C^\infty$ sur $B_{\mathcal L(E)}(0,1)$, donc sur $B_{\mathcal L(E)}(0,a)$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), sa différentielle en $L$ est
$$
H\mapsto d\Psi_{\id-L}(-H)=(\id-L)^{-1}\circ H\circ(\id-L)^{-1}.\qquad\square
$$

## Preuve à trous

Comme $\mathcal L(E)$ est une algèbre normée, $\|L^n\|\le$ <trou>$\|L\|^n\le a^n$</trou>, donc $\sum L^n$ est absolument convergente, donc convergente parce que <trou indice="quelle propriété de E se transmet à L(E) ?">$\mathcal L(E)$ est complet (car $E$ l'est)</trou> ; sa somme $S$ vérifie $\|S\|\le(1-a)^{-1}$. Avec $S_N=\sum_{n\le N}L^n$, on a <trou indice="télescopage">$(\id-L)S_N=S_N(\id-L)=\id-L^{N+1}$</trou>, et à la limite $(\id-L)S=S(\id-L)=\id$. Enfin $L\mapsto(\id-L)^{-1}$ est la composée de l'application affine $L\mapsto\id-L$ et de <trou>l'inversion $M\mapsto M^{-1}$, de classe $C^\infty$ sur l'ouvert $\mathrm{Iso}(E)$ (Théorème V.5.7)</trou>, d'où la régularité $C^\infty$. $\square$

## Exemples

* **Matrice $2\times2$.** $E=\R^2$ (norme $\|\cdot\|_\infty$), $L=\begin{pmatrix}0&\frac12\\ \frac12&0\end{pmatrix}$, $\|L\|=\frac12$ (norme subordonnée à $\|\cdot\|_\infty$ = max des sommes des $|$coefficients$|$ par ligne). On a $L^2=\frac14\id$, donc $\sum L^n=(1+\frac14+\frac1{16}+\cdots)(\id+L)=\frac43(\id+L)=\begin{pmatrix}\frac43&\frac23\\ \frac23&\frac43\end{pmatrix}$, et l'on vérifie directement que c'est l'inverse de $\id-L=\begin{pmatrix}1&-\frac12\\-\frac12&1\end{pmatrix}$ ; sa norme est $\frac43+\frac23=2=(1-\frac12)^{-1}$ : la borne est atteinte.
* **Équation intégrale de Fredholm.** $E=C^0([0,1])$ avec $\|\cdot\|_\infty$ (Banach), $(Lu)(t)=\frac12\int_0^1\sin(t s)\,u(s)\,ds$ : $\|Lu\|_\infty\le\frac12\|u\|_\infty$ (car $|\sin|\le1$). Donc pour tout $f\in E$, l'équation $u-Lu=f$ a une unique solution continue $u=\sum_nL^nf$, avec $\|u\|_\infty\le2\|f\|_\infty$.
* **Dérivée en $L=0$.** La formule de la différentielle donne $d\big((\id-\cdot)^{-1}\big)_0(H)=H$, en accord avec le développement $(\id-H)^{-1}=\id+H+H^2+\cdots=\id+H+O(\|H\|^2)$.

## Pièges

* > ⚠️ La série $\sum L^n$ converge dans $\mathcal L(E)$ **parce que $\mathcal L(E)$ est complet** ; sans complétude de $E$, l'inverse peut ne pas exister (contre-exemple $c_{00}$).
* L'ordre des facteurs compte dans la différentielle : $H\mapsto(\id-L)^{-1}H(\id-L)^{-1}$, pas $(\id-L)^{-2}H$ (sauf si $H$ commute avec $L$).
* $\|L\|<1$ est **suffisant**, pas nécessaire, pour l'inversibilité de $\id-L$ ; ce qui compte vraiment est que $1$ ne soit pas dans le spectre de $L$.
* Ne pas confondre la boule ouverte $B_{\mathcal L(E)}(0,a)$ de l'énoncé avec la condition « $\|L\|\le a$ » (boule fermée) de la première partie ; dans le Théorème VI.1.4, on utilise la régularité sur $B_{\mathcal L(E)}(0,1)$, qui contient toutes les $L$ avec $\|L\|\le a$.
