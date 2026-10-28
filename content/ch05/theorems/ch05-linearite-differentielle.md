---
id: ch05-linearite-differentielle
type: proposition
chapter: 5
title: Linéarité de la différentielle
ref: Proposition V.3.11
page: 99
importance: 2
depends: [ch05-differentielle-def]
tags: [linearite, differentielle, combinaison-lineaire, regles-de-calcul]
---
## Intuition

> 💡 Si $f$ et $g$ sont chacune bien approchées près de $a$ par une application linéaire (leur différentielle), alors $\lambda f+\mu g$ est bien approchée par la même combinaison $\lambda\,df_a+\mu\,dg_a$ : les erreurs s'ajoutent, et une somme de deux erreurs négligeables reste négligeable. C'est la version « espaces vectoriels normés » de $(\lambda f+\mu g)'=\lambda f'+\mu g'$.

Rappel : $f:U\to F$ est **différentiable** en $a\in U$ s'il existe $df_a\in\mathcal L(E;F)$ (linéaire continue) avec $f(a+h)-f(a)-df_a(h)=o(h)$, c'est-à-dire : pour tout $\eps>0$ il existe $\delta>0$ tel que $\|h\|_E<\delta$ entraîne $\|f(a+h)-f(a)-df_a(h)\|_F\le\eps\|h\|_E$ ([[ch05-differentielle-def]], [[ch05-petit-o-def]]).

## Énoncé

**Proposition (poly, Proposition V.3.11, p. 99).** Soient $E$ et $F$ des espaces vectoriels normés, $U$ un ouvert de $E$ et $f,g:U\to F$ des applications différentiables en un point $a$ de $U$. Alors toute combinaison linéaire $\lambda f+\mu g$ ($\lambda,\mu\in\R$) de $f$ et de $g$ est encore différentiable au point $a$, et
$$
d(\lambda f+\mu g)_a=\lambda\,df_a+\mu\,dg_a .
$$
Autrement dit : l'ensemble des applications $U\to F$ différentiables en $a$ est un sous-espace vectoriel de $F^U$, et $f\mapsto df_a$ est linéaire sur ce sous-espace.

## Hypothèses

### H1 — $f$ et $g$ différentiables **au même point** $a$

**Rôle.** On ajoute les deux développements limités en $a$ ; il faut que les deux existent au même point, sur le même ouvert $U$, à valeurs dans le même espace $F$.

**Si on la retire.** *Si une seule des deux est différentiable*, la combinaison ne l'est pas (pour $\mu\neq0$) : sinon $g=\frac1\mu\big((\lambda f+\mu g)-\lambda f\big)$ serait différentiable en $a$ par la proposition elle-même. Exemple : $f=0$, $g(x)=|x|$ sur $\R$, $a=0$ : $f+g=|\cdot|$ n'est pas dérivable en $0$. *La réciproque est fausse* : $f(x)=|x|$ et $g(x)=-|x|$ ne sont pas différentiables en $0$, mais $f+g=0$ l'est. On ne peut donc pas « séparer » une somme différentiable en morceaux différentiables.

## Idée de la preuve

$\lambda\,df_a+\mu\,dg_a$ est linéaire continue, et le reste de $\lambda f+\mu g$ est $\lambda r_f(h)+\mu r_g(h)$, combinaison de deux $o(h)$, donc un $o(h)$ (inégalité triangulaire).

## Preuve

*Le poly omet la preuve (« très facile ») ; la voici.*

Notons $r_f(h)=f(a+h)-f(a)-df_a(h)$ et $r_g(h)=g(a+h)-g(a)-dg_a(h)$, définis pour $a+h\in U$. Posons $L=\lambda\,df_a+\mu\,dg_a$.

*$L\in\mathcal L(E;F)$.* $L$ est linéaire comme combinaison d'applications linéaires, et $\|L(h)\|_F\le\big(|\lambda|\,\|df_a\|+|\mu|\,\|dg_a\|\big)\|h\|_E$, donc $L$ est continue ($\mathcal L(E;F)$ est un espace vectoriel : [[ch05-lef-banach-norme-algebre]]).

*Le reste.* Par linéarité de $L$,
$$
(\lambda f+\mu g)(a+h)-(\lambda f+\mu g)(a)-L(h)=\lambda\,r_f(h)+\mu\,r_g(h).
$$
Soit $\eps>0$ et $\eps'=\eps/(|\lambda|+|\mu|+1)$. Il existe $\delta_f,\delta_g>0$ tels que $\|h\|<\delta_f\Rightarrow\|r_f(h)\|\le\eps'\|h\|$ et $\|h\|<\delta_g\Rightarrow\|r_g(h)\|\le\eps'\|h\|$ (avec $a+h\in U$). Pour $\|h\|<\min(\delta_f,\delta_g)$,
$$
\|\lambda\,r_f(h)+\mu\,r_g(h)\|_F\le|\lambda|\,\|r_f(h)\|+|\mu|\,\|r_g(h)\|\le(|\lambda|+|\mu|)\,\eps'\|h\|\le\eps\|h\|.
$$
Donc le reste est un $o(h)$ : $\lambda f+\mu g$ est différentiable en $a$, de différentielle $L$, qui est unique ([[ch05-derivee-directionnelle-unicite]]). $\square$

## Preuve à trous

Soient $r_f(h)=f(a+h)-f(a)-df_a(h)$, $r_g(h)$ de même, et $L=\lambda\,df_a+\mu\,dg_a$. $L$ est continue car <trou indice="majorer avec les normes d'opérateur">$\|L(h)\|\le(|\lambda|\,\|df_a\|+|\mu|\,\|dg_a\|)\|h\|$</trou>.

Par linéarité de $L$, le reste de $\lambda f+\mu g$ en $a$ vaut <trou>$\lambda\,r_f(h)+\mu\,r_g(h)$</trou>. Pour $\eps>0$, on prend $\eps'=\eps/(|\lambda|+|\mu|+1)$ et <trou indice="il faut que les deux restes soient petits simultanément">$\delta=\min(\delta_f,\delta_g)$, où $\delta_f$, $\delta_g$ sont associés à $\eps'$ pour $r_f$ et $r_g$</trou> ; alors pour $\|h\|<\delta$, l'inégalité triangulaire donne $\|\lambda r_f(h)+\mu r_g(h)\|\le\eps\|h\|$. $\square$

## Exemples

* **Fonction quadratique sur un Hilbert.** Soit $E$ un espace de Hilbert, $\ell\in\mathcal L(E;\R)$ et $q(x)=3\|x\|^2-2\ell(x)$. Comme $d(\|\cdot\|^2)_a(h)=2\langle a,h\rangle$ (voir [[ch05-gradient-hilbert]]) et $d\ell_a=\ell$ ([[ch05-differentielle-lineaire]]), on obtient $dq_a(h)=6\langle a,h\rangle-2\ell(h)$.
* **Polynômes sur $\R^2$.** $f(x,y)=x^2-5xy$ : $d(x^2)_{(a,b)}(h,k)=2ah$ et $d(xy)_{(a,b)}(h,k)=ak+bh$ ([[ch05-differentielle-bilineaire]]), donc $df_{(a,b)}(h,k)=2ah-5(ak+bh)=(2a-5b)h-5ak$. Vérification directe : $f(a+h,b+k)-f(a,b)=(2a-5b)h-5ak+h^2-5hk$, et $h^2-5hk=o((h,k))$.
* **Conséquence.** $C^1(U;F)$ est un espace vectoriel : si $df$ et $dg$ sont continues $U\to\mathcal L(E;F)$, alors $d(\lambda f+\mu g)=\lambda\,df+\mu\,dg$ l'est aussi.

## Pièges

* > ⚠️ La réciproque est fausse : $f+g$ différentiable n'entraîne pas $f$ et $g$ différentiables ($|x|$ et $-|x|$).
* La proposition parle de **combinaisons linéaires**, pas de produits : $d(fg)_a\neq df_a\,dg_a$. Pour un produit, c'est la formule de Leibniz ([[ch05-formule-leibniz]]).
* Les scalaires $\lambda,\mu$ sont **constants** ; si $\lambda$ dépend de $x$, on est dans le cas d'un produit $x\mapsto\lambda(x)f(x)$ (Leibniz avec $b(\lambda,y)=\lambda y$).
